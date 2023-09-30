import { z } from 'zod'

export const taskFormSchema = z.object({
    taskName: z.string().min(1, { message: 'Minimum 1 character.' }).max(150, { message:'Limit is 150 characters.' }),
    
    description: z.string().max(250, { message: 'Maximum is 250 characters.' }),
})