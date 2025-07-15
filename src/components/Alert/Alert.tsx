import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import type { AlertType } from '../../types/indes';


interface IAlertProps {
    type: AlertType
    icon: ReactNode
    title: string
    description: string
}

export default function Alert({ type = "alert-error", icon, title, description }: IAlertProps) {
    return (
        <>
        
            <div className={type}>
                <span className="alert-wrapper-icon">
                    {icon}
                    <h4>{title}</h4>
                    <X /></span>

                <p>{description}</p>
            </div>

        </>
    )
}
