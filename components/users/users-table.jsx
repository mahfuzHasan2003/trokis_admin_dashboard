import { Info } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function UsersTable({caption, users}) {
  return (
    <Table>
      <TableCaption> {caption} </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>#SL</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

       <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.serial}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
               <Popover>
                  <PopoverTrigger>
                     <Info className="cursor-pointer" />
                  </PopoverTrigger>
                  <PopoverContent align="right" className="max-w-64">
                     <h4 className="text-center">User details</h4>
                     <div className="flex *:flex-1 text-sm mt-3">
                        <p className="text-muted-foreground">User Name</p>
                        <p className="text-right">Name here.</p>
                     </div>
                     <div className="flex *:flex-1 text-sm">
                        <p className="text-muted-foreground">Service</p>
                        <p className="text-right">Moving.</p>
                     </div>
                     <div className="flex *:flex-1 text-sm">
                        <p className="text-muted-foreground">Date</p>
                        <p className="text-right">29 July 2024</p>
                     </div>
                     <div className="flex *:flex-1 text-sm">
                        <p className="text-muted-foreground">Amount</p>
                        <p className="text-right">$565</p>
                     </div>
                  </PopoverContent>
               </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
