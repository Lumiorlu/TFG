export interface Roles {
	reader?: boolean;
	editor?: boolean;
	admin?: boolean;
}
export interface Username {
	username: string;
}

export interface User {
	uid: string;
	displayName: string;
	photoURL: string;
	emailVerified: boolean;
	email: string;
	username:Username;
	roles: Roles;
}