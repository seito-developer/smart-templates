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

export default function TableData({ textContent }: { textContent: string }) {
  const name = ''
  const description = ''
  const number = ''
  const symbol = ''
  const stock = ''
  const ItemGroupMasterId = ''
  const IdFrom = number.toString() + '00001'
  const IdTo = number.toString() + stock.toString()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Exec</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>TokenType</TableHead>
          <TableHead>ItemGroupMasterId</TableHead>
          <TableHead>Supply</TableHead>
          <TableHead>IdFrom</TableHead>
          <TableHead>IdTo</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>ContentType</TableHead>
          <TableHead>ContentUrl</TableHead>
          <TableHead>ThreeContentBgColor</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>ExternalUrl</TableHead>
          <TableHead>AnimationUrl</TableHead>
          <TableHead>Attributes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>TRUE</TableCell>
          <TableCell>Collective</TableCell>
          <TableCell>{symbol}</TableCell>
          <TableCell>{number}</TableCell>
          <TableCell>{ItemGroupMasterId}</TableCell>
          <TableCell>{stock}</TableCell>
          <TableCell>{IdFrom}</TableCell>
          <TableCell>{IdTo}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{description}</TableCell>
          <TableCell>
            https://snft/itemtype/${symbol}/thumbnails/{number}.png
          </TableCell>
          <TableCell>image/png</TableCell>
          <TableCell>
            https://snft/itemtype/${symbol}/contents/{number}.png
          </TableCell>
          <TableCell>N/A</TableCell>
          <TableCell>@{symbol}</TableCell>
          <TableCell>N/A</TableCell>
          <TableCell>N/A</TableCell>
          <TableCell>N/A</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

TableHeader
TableRow
TableHead
