declare global {
	interface Scene {
		id: string
	}

	declare interface State {
		scenes: Scene[]
	}
}

export {}
