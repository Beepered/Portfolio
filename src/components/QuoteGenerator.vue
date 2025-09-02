<template>
    <blockquote>
        <i>{{ quote }}</i>
        - Brendan Trieu
    </blockquote>
</template>

<script>
export default {
    name: 'QuoteGenerator',
    data() {
        return {
            quote: ""
        }
    },
    async mounted() {
        try {
            const FILE_PATH = "public/quotes.txt"
            const response = await fetch(FILE_PATH);
            const text = await response.text();
            this.processFileContent(text);
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    },
    methods: {
        processFileContent(content) {
            const lines = content.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
            if (lines.length > 0) {
                const min = Math.ceil(0);
                const max = Math.floor(lines.length);
                const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
                this.quote = lines[randomIndex];
            }
        },
        beforeMount() {
        }
    }
}
</script>