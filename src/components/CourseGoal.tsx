import { type PropsWithChildren } from "react";

// type CourseGoalProps = {
//     title: string;
//     children: ReactNode
// };

type CourseGoalProps = PropsWithChildren<{ 
    title: string;
    id: number;
    onDelete: (id: number) => void;
 }>;

export default function CourseGoal({
    title, 
    id, 
    children,
    onDelete
}: CourseGoalProps ) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button  onClick={() => onDelete(id)}>Delete</button>
    </article>
}

// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return (
//         <article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>
//     );
// };
// export default CourseGoal;