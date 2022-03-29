<template>
	<v-app>
		<v-app-bar app color="gray" dark>
			<div class="d-flex align-center">
				<!-- <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" /> -->
				<!-- <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" /> -->
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			</div>

			<v-spacer></v-spacer>

			<span>Jimmy Lazer and the Robots</span>

			<!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
				<span class="mr-2">Latest Release</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn> -->
		</v-app-bar>

		<v-navigation-drawer app v-model="drawer" bottom temporary>
			<v-list nav dense>
				<v-list-item-group active-class="deep-purple--text text--accent-4">
					<v-list-item
						v-for="link in links"
						:key="link"
						:to="paths[link].path"
						exact
					>
						<v-list-item-icon>
							<!-- This should be {{icon}} from the data object -->
							<v-icon>mdi-{{paths[link].icon}}</v-icon>
						</v-list-item-icon>
						<v-list-item-title>{{link}}</v-list-item-title>
					</v-list-item>
				</v-list-item-group>

				<!-- hard-coded drawer items at the bottom -->
				<v-list-item 
					href="https://www.linkedin.com/in/andrew-piispanen-a22511a8/"
					style="position: absolute; bottom: 0; width: 97%;"
					target="_blank"
				>
					<v-list-item-icon>
						<img src="@/assets/linkedin.svg" alt="instagram favicon">
					</v-list-item-icon>
					<v-list-item-title>
						Drew's LinkedIn
					</v-list-item-title>
				</v-list-item>

				<v-list-item 
					href="https://www.instagram.com/jimmylazerandtherobots/"
					style="position: absolute; bottom: 45px; width: 97%;"
					target="_blank"
				>
					<v-list-item-icon>
						<img src="@/assets/instagram.svg" alt="instagram favicon">
					</v-list-item-icon>
					<v-list-item-title>
						Instagram
					</v-list-item-title>
				</v-list-item>

			</v-list>


			
		</v-navigation-drawer>

		<v-main>
			<!-- <HelloWorld /> -->
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-main>
		
	</v-app>
</template>

<script>
export default {
	name: 'App',

	components: {
	},

	data: () => ({
		links: [
			'Song List',
			'Tempo Tap'
		],
		paths: {
			'Song List': {
				path: '/',
				icon: 'playlist-music'
			},
			'Tempo Tap': {
				path: '/tempo-tap',
				icon: 'music-note'
			}
		},
		drawer: false,
		drawerItems: [
			{
				text: "Song List",
				route: "/song-list",
				id: ""
			},
			{
				text: "Tempo Tap",
				route: "/tempo-tap",
				id: ""
			}
		]
	}),
};
</script>