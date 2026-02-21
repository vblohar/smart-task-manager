import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./core/layout/main-layout/main-layout')
                .then(m => m.MainLayout),
  
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/tasks/pages/task-list/task-list')
                        .then(m => m.TaskList)
            },
            {
                path: 'create',
                loadComponent: () =>
                    import('./features/tasks/pages/task-form/task-form')
                        .then(m => m.TaskForm)
            }
        ]
    }

];
