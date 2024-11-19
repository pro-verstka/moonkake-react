type GetObjectValues<Obj> = Obj extends Record<string, unknown> ? Obj[keyof Obj] : never

type ApiError = {
	detail: string
	title: string
	type: string
}

type UnknownError = {
	[key: string]: unknown
}
