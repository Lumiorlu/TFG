export interface Roles {
	reader?: boolean;
	editor?: boolean;
	admin?: boolean;
}

export interface User {
	uid: string;
	displayName: string;
	// name: string;
	// lastName: string;
	// username: string;
	// date: Date;
	photoURL: string;
	emailVerified: boolean;
	email: string;
	roles: Roles;
}