'use client'
export const getStateDarkMode = () => {
	if (typeof window !== 'undefined') {
		const state: boolean = localStorage.getItem('darkMode')
			? JSON.parse(localStorage.getItem('darkMode') as string)
			: false
		return state
	}
	return false
}

export const setStateDarkMode = (state: boolean) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('darkMode', JSON.stringify(state))
	}
}
