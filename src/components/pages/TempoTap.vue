<template>
	<div class="d-flex flex-column" style="min-height: 100%; height: 100%; user-select: none;">
		<v-row no-gutters>
			<v-col cols="2">
				<v-btn
					color="cyan"
					small
					@click="bpm--"
					style="touch-action: manipulation"
				>
					<v-icon color="white">
						mdi-minus
					</v-icon>
				</v-btn>
			</v-col>
			<v-col cols="3">
				<v-text-field
					v-model='bpm'
					number
					hide-details
				></v-text-field>
			</v-col>
			<v-col cols="2">
				<v-btn
					color="cyan"
					small
					@click="bpm++"
					style="touch-action: manipulation"
				>
					<v-icon color="white">
						mdi-plus
					</v-icon>
				</v-btn>
			</v-col>
            <v-col cols="5">
				<v-btn
					color="green"
					class="white--text"
					@mousedown='tap'
					block
					style="touch-action: manipulation"
				>TAP</v-btn>
			</v-col>
		</v-row>
		
		
		<v-row no-gutters>
			<v-col cols="4">
			</v-col>
            <v-col cols="4">
			</v-col>
            <v-col cols="4">
			</v-col>
		</v-row>
        <v-divider class='my-2'></v-divider>
        <!-- <v-row no-gutters>
            <v-col cols="9">
                <span style="font-weight: 500;">{{songData.title}}</span> by <span>{{songData.artist}}</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3" class="text-right">
                BPM: <span style="font-weight: bold; font-size: 12pt;">{{songData.BPM}}</span>
            </v-col>
        </v-row> -->
        <div class="blink-container">
            <div class="blinker" ref="blinker"></div>
        </div>

	</div>
</template>

<script>
export default {
	name: 'TempoTap',
	data: () => ({
		clicksArray: [],
		bpm: 0,
		differences: [],
		timeTaken: 0,
		interval: null
	}),
	methods: {
		tap() {
			if (this.clicksArray.length < 6) {
				this.clicksArray.push(Date.now());
			} else {
				this.clicksArray.shift();
				this.clicksArray.push(Date.now());
			}

			this.differences = [];
			this.clicksArray.forEach((e, i) => {
				if (i < this.clicksArray.length - 1) this.differences.push(this.clicksArray[i + 1] - this.clicksArray[i]);
			});

			this.timeTaken = this.differences.filter((e) => e != null).reduce((f, s) => f + s);
			this.bpm = ((60 * 1000) / this.timeTaken) * this.differences.length | 0;
		},
		flash() {
			clearInterval(this.interval);

			let blinkerEl = this.$refs.blinker;
            let interval = 60 / parseInt(this.bpm) * 1000 | 0;

            const steady = () => {
				// DOM logic
				if (blinkerEl.style.display == "none") {
					blinkerEl.style.display = "block"
				} else {
					blinkerEl.style.display = "none";
				}

				// Account for setInterval drift
				let drift = Date.now() - expected;
				expected += interval;
				console.log(drift);
				console.log(interval - drift);
				this.interval = setTimeout(steady, interval - drift);
            }

			let expected = Date.now() + interval;
            this.interval = setTimeout(steady, interval);

		},
	},
	watch: {
		bpm(newVal, oldVal) {
			console.log(newVal, oldVal);
			if (newVal && newVal > 0) this.flash();
		}
	}
};
</script>

<style scoped>
.v-text-field {
    padding-top: 0;
    margin-top: 0;
	margin-right: 12px;
}

.blink-container {
    border: 1px solid black;
    flex-grow: 2;
}

.blinker {
    width: 100%;
    height: 100%;
    background: black;
    display: none;
}

.row {
    flex: none;
}

.v-btn {
	height: 100% !important;
}
</style>
