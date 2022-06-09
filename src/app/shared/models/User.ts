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
	// declararo como string no es necesario que declares una interfaz
	username: string;
	roles: Roles;
}
