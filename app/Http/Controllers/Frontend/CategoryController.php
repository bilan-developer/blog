<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Category;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * Смисок категорий.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('frontend.category.index', [
            'categories' => Category::whereHas('news', function ($query) {
                $query->where('status', 'publish');
            })->paginate(5),
        ]);
    }

    /**
     * Просмотр новостей по категории.
     *
     * @param Category $category
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(Category $category)
    {
        return view('frontend.category.show', [
            'news' => $category->news()->where('status', 'publish')->with('image')->paginate(5),
        ]);
    }
}
