<template>
    <div>
	this is song route
        <h1>{{songs}}</h1>

    </div>
</template>

<script>
import Songs from '@/data/songs.js';

export default {
	name: 'Song',
    props: ['song'],
	data: () => ({
        songs: Songs
    }),
};
</script>
