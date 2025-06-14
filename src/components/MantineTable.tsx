import { Table } from '@mantine/core';

export function MantineTable({elements} :{elements :any}) {
    const rows = elements.map((element : any) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.score}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Score</Table.Th>
                    <Table.Th>Name</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}