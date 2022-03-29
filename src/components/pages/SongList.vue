<template>
	<v-simple-table fixed-header style="">
		<template v-slot:default>
			<thead>
				<tr>
					<th class="text-left">Song</th>
					<th class="text-left">BPM</th>
                    <th class="text-left">Duration</th>
                    <!-- <th></th> -->
				</tr>
			</thead>
			<tbody>
				<tr v-for="song in songs" :key="song.title" @click="navigateToSong(song)">
                    <td>{{ song.title }}</td>
                    <td>{{ song.BPM }}</td>
                    <td>
                        {{song.duration}}
                    </td>
                    <!-- <td class="text-center">
                        <v-icon>mdi-play</v-icon>
                    </td> -->
				</tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>{{totalDuration()}}</td>
                </tr>
			</tbody>
		</template>
	</v-simple-table>
</template>

<script>
import Songs from '@/data/songs.js';

export default {
	name: 'SongList',
	data: () => ({
        songs: Songs,
	}),
    methods: {
        navigateToSong(song) {
            // Combines song name + artist. Ex. Everlong - Foo Fighters becomes 'everlong-foo-fighters'
            // let url = [...song.title.toLowerCase().split(' '), ...song.artist.toLowerCase().split(' ')].join('-');
            let url = song.title.toLowerCase().split(' ').join('-');
            console.log(url);
            this.$router.push({ path: '/song/' + url});
        },
        totalDuration() {
            // let durationInSeconds = 0;
            // const songDurationsArray = Songs.map(song => song.duration);
            // let durationInSeconds = 0;
            // console.log(songDurationsArray);
            // const seconds = songDurationsArray.filter(song => {
            //     let splitSong = song.split(':');
            //     durationInSeconds += ((splitSong[0] * 60) + splitSong[1])
            //     console.log(splitSong, durationInSeconds);

            // })
            // return seconds;
        }
    }
};
</script>

<style scoped>
tbody tr {
    cursor: pointer;
}

/* .v-data-table--fixed-header > .v-data-table__wrapper {
    overflow-y: none;
} */
</style>