export interface Roles {
	reader?: boolean;
	editor?: boolean;
	admin?: boolean;
}

export interface User {
	uid: string;
	displayName: string;
	photoURL: string;
	emailVerified: boolean;
	email: string;
	username: string;
	roles: Roles;
}
