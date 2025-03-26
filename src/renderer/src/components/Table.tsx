import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function TableData({ thead, tbody } : { thead: string[], tbody: string[] }) {
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {thead.map((theadItem) => (
            <TableHead key={theadItem}>{theadItem}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {tbody.map((tbodyItem) => (
            <TableCell key={tbodyItem}>{tbodyItem}</TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  )
}

TableHeader
TableRow
TableHead
