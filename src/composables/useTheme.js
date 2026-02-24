import { ref, onMounted } from 'vue'

export function useTheme() {
    const theme = ref('light')

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'

        document.documentElement.setAttribute('data-theme', theme.value)

        localStorage.setItem('theme', theme.value)
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

        theme.value = savedTheme
        document.documentElement.setAttribute('data-theme', savedTheme)
    })

    return { theme, toggleTheme }
}