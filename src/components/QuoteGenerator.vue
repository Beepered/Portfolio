<template>
    <blockquote>
        <i>{{ quote }}</i>
        - Brendan Trieu
    </blockquote>
</template>

<script>
import textContent from '@assets/quotes.txt?raw';

export default {
    data() {
        return {
            quote: "",
        }
    },
    async mounted() {
        try {
            this.GetRandomLine(textContent);
        } catch (error) {
            console.error('Error fetching file:', error);
        }

    },
    methods: {
        GetRandomLine(content) {
            const lines = content.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
            if (lines.length > 0) {
                const min = Math.ceil(0);
                const max = Math.floor(lines.length);
                const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
                this.quote = lines[randomIndex];
            }
        },
    }
}
</script>