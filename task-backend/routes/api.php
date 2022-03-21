<?php

use App\Http\Controllers\API\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/add-student', [StudentController::class, 'store'])->name('add.student');
Route::get('/students', [StudentController::class, 'index'])->name('students');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
