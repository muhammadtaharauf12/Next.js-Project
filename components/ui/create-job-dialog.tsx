import { Plus } from "lucide-react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Label } from "./label";
import { Input } from "./input";

interface CreateJobApplicationDialogProps {
  columnId: string;
  boardId: string;
}

export default function CreateJobApplicationDialog({
  columnId,
  boardId,
}: CreateJobApplicationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
       render={
       <Button variant='outline'
       className="w-full mb-4 justify-start text-muted-foreground border-dashed border-2 hover:border-solid hover:bg-muted/50">
        <Plus className="mr-2 h-4 w-4"/>
        Add job
        </Button>
    }>
    </DialogTrigger>
    <DialogContent className="max-w-2xl">
        <DialogHeader>
            <DialogTitle>Add Job Application</DialogTitle>
            <DialogDescription>Track a new job application</DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="company">Company*</Label>
                        <Input id="company" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="position">position*</Label>
                        <Input id="position" required />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">

                    <div className="space-y-2">
                        <Label htmlFor="Location">Location</Label>
                        <Input id="Location" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="Salary">Salary</Label>
                        <Input id="Salary" required placeholder="e.g., $100k - $150k" />
                    </div>

                </div>
            </div>
        </form>
    </DialogContent>
    </Dialog>
  );
}
