export default interface IProvider {
    getItems(): Array<Object>,
    getItem(id: number): Object
}