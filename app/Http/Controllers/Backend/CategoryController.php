<?php

namespace App\Http\Controllers\Backend;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Services\Backend\Category\CategoryService;
use App\Services\Backend\Image\ImageService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    protected $service;

    public function __construct()
    {
        $this->service = new CategoryService();
    }

    /**
     * Все категории.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.category.index', [
            'grid' => $this->service->getGrid(),
        ]);
    }

    /**
     * Страница для добавления катекории.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.category.create');
    }

    /**
     * Добавление категории.
     *
     * @param  CategoryRequest $request
     * @param Category $category
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(CategoryRequest $request, Category $category)
    {
        $category->fill($request->only('name', 'description'));
        $category->image_id = ImageService::savePhoto($request->image, 'categories');
        $category->save();

        \Session::flash('flash_success', 'Категория успешно создана');
        return redirect()->route('admin.category.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Страница редактирования категории.
     *
     * @param Category $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return view('backend.category.edit', compact('category'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param CategoryRequest $request
     * @param Category $category
     * @return void
     * @throws \Exception
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $category->fill($request->only('name', 'description'));
        if(isset($request->image)){
            $oldImage = $category->image;
            $category->image_id = ImageService::savePhoto($request->image, 'categories');
        }
        $category->save();

        if (isset($oldImage)){
            ImageService::deletePhotoAndDirectory($oldImage);
        }

        \Session::flash('flash_success', 'Категория успешно обновлена');
        return redirect()->route('admin.category.index');
    }

    /**
     * Удаление категории.
     *
     * @param Category $category
     * @return void
     * @throws \Exception
     */
    public function destroy(Category $category)
    {
        $image = $category->image;
        $category->delete();
        ImageService::deletePhotoAndDirectory($image);

        \Session::flash('flash_success', 'Категория успешно удалёна');
        return redirect()->route('admin.category.index');
    }
}
