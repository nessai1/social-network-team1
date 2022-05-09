import IProvider from "../interfaces/IProvider";

export default class UsersProvider implements IProvider {
    async getItem(id: number): Promise<Object> {
        const response = await fetch(`http://localhost:4200/users/${id}`);
        return response.json();
    }

    async getItems(): Promise<Object[]> {
        const response = await fetch(`http://localhost:4200/users`);
        return response.json();
    }
}