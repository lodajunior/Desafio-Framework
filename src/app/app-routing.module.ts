import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './pages/albuns/albuns.component';
import { TodoComponent } from './pages/todo/todo.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: ' ', redirectTo: '/home' },
  // { path: '**', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: AlbunsComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
