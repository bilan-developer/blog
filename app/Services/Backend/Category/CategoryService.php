<?php
/**
 * Created by PhpStorm.
 * User: Bilan
 * Date: 14.05.2019
 * Time: 0:08
 */

namespace App\Services\Backend\Category;

use App\Models\Category;
use Nayjest\Grids\Components\Base\RenderableRegistry;
use Nayjest\Grids\Components\ColumnHeadersRow;
use Nayjest\Grids\Components\FiltersRow;
use Nayjest\Grids\Components\HtmlTag;
use Nayjest\Grids\Components\Laravel5\Pager;
use Nayjest\Grids\Components\OneCellRow;
use Nayjest\Grids\Components\ShowingRecords;
use Nayjest\Grids\Components\TFoot;
use Nayjest\Grids\Components\THead;
use Nayjest\Grids\EloquentDataProvider;
use Nayjest\Grids\FieldConfig;
use Nayjest\Grids\Grid;
use Nayjest\Grids\GridConfig;

class CategoryService
{
    /**
     * Таблица категорий.
     */
    public function getGrid()
    {
        $grid = new Grid(
            (new GridConfig)
                ->setDataProvider(
                    new EloquentDataProvider(
                        $this->search()
                    )
                )
                ->setName('categories_grid')
                ->setPageSize(25)
                ->setColumns([
                    (new FieldConfig)
                        ->setName('id')
                        ->setLabel('ID')
                        ->setSortable(false)
                        ->setSorting(Grid::SORT_DESC)
                        ->setCallback(function ($val, $row) {
                            return $row->getSrc()->id;
                        })
                    ,
                    (new FieldConfig)
                        ->setName('name')
                        ->setLabel('Название')
                        ->setSortable(true)
                        ->setCallback(function ($val, $row) {
                            return $val;
                        })
                    ,
                    (new FieldConfig)
                        ->setName('created_at')
                        ->setLabel('Дата создания')
                        ->setSortable(true)
                        ->setCallback(function ($val, $row) {
                            return date('Y-m-d', strtotime($row->getSrc()->created_at));
                        })
                    ,
                    (new FieldConfig)
                        ->setName('updated_at')
                        ->setLabel('Дата редактирования')
                        ->setSortable(true)
                        ->setCallback(function ($val, $row) {
                            return date('Y-m-d', strtotime($row->getSrc()->updated_at));
                        })
                    ,
                    (new FieldConfig)
                        ->setName('action_buttons')
                        ->setLabel('Действия')
                    ,
                ])
                ->setComponents([
                    (new THead)
                        ->setComponents([
                            (new ColumnHeadersRow),
                            (new FiltersRow),
                            (new OneCellRow)
                                ->setRenderSection(RenderableRegistry::SECTION_END)
                        ])
                    ,
                    (new TFoot)
                        ->setComponents([
                            (new OneCellRow)
                                ->setComponents([
                                    (new Pager),
                                    (new HtmlTag)
                                        ->setAttributes(['class' => 'pull-right'])
                                        ->addComponent(new ShowingRecords)
                                    ,
                                ])
                            ,
                        ])
                    ,
                ])
        );

        return $grid->render();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function search()
    {
        return (new Category())
            ->newQuery();
    }

}