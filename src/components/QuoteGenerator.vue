<template>
    <blockquote>{{ quote }} - Brendan Trieu</blockquote>
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
            const FILE_PATH = "/quotes.txt"
            const response = await fetch(FILE_PATH);
            const text = await response.text();
            this.processFileContent(text);
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    },
    methods: {
        RandomQuote: async () => {
            const linesCount = await getLinesCount();
            const randomLineIndex = Math.floor(Math.random() * linesCount + 1);
            this.quote = await getLineContent(randomLineIndex)
        },
        processFileContent(content) {
            const lines = content.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
            if (lines.length > 0) {
                const randomIndex = Math.floor(Math.random() * lines.length);
                this.quote = lines[randomIndex];
            }
        },
        beforeMount() {
        }
    }
}
</script>