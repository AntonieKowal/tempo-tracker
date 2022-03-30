<template>
	<div class="d-flex flex-column" style="min-height: 100%; height: 100%;">
		<v-row no-gutters>
			<v-col cols="4">
				<v-switch v-model="settings.flash" label="Flash" color="orange" hide-details @change="blink('flash', $event)"></v-switch>
			</v-col>
            <v-col cols="4">
				<v-switch v-model="settings.steady" label="Steady" color="green" hide-details @change="blink('steady', $event)"></v-switch>
			</v-col>
            <v-col cols="4">
				<v-switch v-model="settings.audio" label="Audio" color="primary" hide-details></v-switch>
			</v-col>
		</v-row>
        <v-divider class='mt-4 mb-2'></v-divider>
        <v-row no-gutters>
            <v-col cols="9">
                <span style="font-weight: 500;">{{songData.title}}</span> by <span>{{songData.artist}}</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3" class="text-right">
                BPM: <span style="font-weight: bold; font-size: 12pt;">{{songData.BPM}}</span>
            </v-col>
        </v-row>
        <div class="blink-container">
            <div class="blinker" ref="blinker">{{songData}}</div>
        </div>

	</div>
</template>

<script>
import Songs from '@/data/songs.js';
import Click2 from '@/assets/click2.mp3';

export default {
	name: 'Song',
	props: ['song'],
    mounted() {
        // Find the correct song from the playlist
        this.songData = this.songs.find(song => {
            let title = song.title.toLowerCase().split(' ').join('-');
            if (this.song == title) return song;
        })

        this.initIntervalFunctions();
        
    },
	data: () => ({
		songs: Songs,
        songData: {},
		settings: {
            flash: false,
            steady: false,
            audio: false
        },
        intervalContainer: {},
        intervalFunctions: {
            flash: null,
            steady: null
        }
	}),
    methods: {
        blink(mode, value) {
            // Since only one mode can be enabled at one time, toggle the other one off.
            (mode == 'flash') ? this.settings.steady = false : this.settings.flash = false;
            // Reset the interval to a new instance once toggled on.
            this.stop();
            // If the incoming value of the toggle is false, meaning the user just disabled a switch, just return early after clearing the interval.
            if (!value) return;
            
            // Call the appropriate interval function based on the currently selected mode
            this.intervalFunctions[mode]();
            
        },
        stop() {
            if (this.intervalContainer) clearInterval(this.intervalContainer);
        },
        playTone() {
            // let click1 = new Audio('@/assets/click1.mp3');
            let click2 = new Audio(Click2);
            click2.play();
        },
        initIntervalFunctions(){
            let blinkerEl = this.$refs.blinker;
            let interval = 500//60 / parseInt(this.songData.BPM) * 1000 | 0;
            let flashDuration = 50 //ms

            // Resource for self-correcting drift from inaccurate setTimeout
            // https://www.youtube.com/watch?v=x8PBWobv6NY&ab_channel=MusicandCoding
            this.intervalFunctions.flash = () => {
                let expected = Date.now() + interval;

                const flash = () => {
                    // DOM logic
                    
                    blinkerEl.style.display = "block";
                    setInterval(() => blinkerEl.style.display = "none", flashDuration);

                    // Play audio if enabled
                    if (this.settings.audio) this.playTone();

                    // Account for setInterval drift
                    let drift = Date.now() - expected;
                    expected += interval;
                    console.log(drift);
                    console.log(interval - drift);
                    this.intervalContainer = setTimeout(flash, interval - drift);
                }

                this.intervalContainer = setTimeout(flash, interval);
            }

            this.intervalFunctions.steady = () => {
                const steady = () => {
                    // DOM logic
                    if (blinkerEl.style.display == "none") {
                        blinkerEl.style.display = "block"
                    } else {
                        blinkerEl.style.display = "none";
                    }
                    // Play audio if enabled
                    if (this.settings.audio) this.playTone();

                    // Account for setInterval drift
                    let drift = Date.now() - expected;
                    expected += interval;
                    console.log(drift);
                    console.log(interval - drift);
                    this.intervalContainer = setTimeout(steady, interval - drift);
                }

                let expected = Date.now() + interval;
                this.intervalContainer = setTimeout(steady, interval);
                // this.intervalContainer = setInterval(() => {
                //     this.playTone();
                //     let blinkerEl = this.$refs.blinker;
                //     if (blinkerEl.style.display == "none") {
                //         blinkerEl.style.display = "block"
                //     } else {
                //         blinkerEl.style.display = "none";
                //     }
                // }, interval)
            }
        }
    }
};
</script>

<style scoped>
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
</style>