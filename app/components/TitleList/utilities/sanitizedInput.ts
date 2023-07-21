export const sanitizedInput = (input: string) => {
	const sanitized = input.replace(/[<>&]|[^-\w\s]/g, '')
	return sanitized
}
