import ItemList from "./item-list";

export default function Page() {
    return(
        <main className="bg-green-200">
            <h1 className="text-xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}