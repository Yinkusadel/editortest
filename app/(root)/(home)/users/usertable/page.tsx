import { User, columns } from './columns';
import { DataTable } from './datatable';

const dummyUsers: User[] = [
    {
        id: '1',
        price: '',
        status: 'pending',
        image: 'https://example.com/image1.jpg',
        createdAt: '2023-10-01T12:00:00Z',
        name: 'Kurosaki ichigo',
    },
];

export default function UserTable() {
    const data = dummyUsers;

    return (
        <section className='py-6 bg-white px-4 max-[800px]:px-0'>
            <div className='w-full max-[800px]:w-[400px]'>
                <DataTable columns={columns} data={data} />
            </div>
        </section>
    );
}
