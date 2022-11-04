<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::statamic('author/{author}', 'author.show');

Route::permanentRedirect('/categories/centers-of-influence-coi', '/insights/categories/centers-of-influence-coi');
Route::permanentRedirect('/categories/crm-ma', '/insights/categories/crm-ma');
Route::permanentRedirect('/categories/executive-presence', '/insights/categories/executive-presence');
Route::permanentRedirect('/categories/fintech-and-advisortech', '/insights/categories/fintech-and-advisortech');
Route::permanentRedirect('/categories/future-trends', '/insights/categories/future-trends');
Route::permanentRedirect('/categories/human-psychology', '/insights/categories/human-psychology');
Route::permanentRedirect('/categories/marketing', '/insights/categories/marketing');
Route::permanentRedirect('/categories/strategic-planning', '/insights/categories/strategic-planning');
Route::permanentRedirect('/categories/sweb-digital-growth', '/insights/categories/sweb-digital-growth');
Route::permanentRedirect('/web-digital-growth-platforms', '/financial-advisor-web-design');