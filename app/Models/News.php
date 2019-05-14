<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'title',
        'description',
        'text',
        'image_id',
        'date',
        'author',
        'category_id',
        'status',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo(Image::class);
    }

    /**
     * @return string
     */
    public function getEditButtonAttribute()
    {
        return '<a href="' . route('admin.news.edit', $this->id) . '" class="btn btn-xs btn-primary"><i class="fa fa-pen" data-toggle="tooltip" data-placement="top" title="Редактировать"></i></a> ';
    }

    /**
     * @return string
     */
    public function getDeleteButtonAttribute()
    {
        return '<a href="' . route('admin.news.destroy', $this->id) . '" name="delete_item" data-method="delete" class="btn btn-xs btn-danger"><i class="fa fa-trash" data-toggle="tooltip" data-placement="top" title="Удалить"></i></a>';
    }

    /**
     * @return string
     */
    function getActionButtonsAttribute()
    {
        $button = $this->getEditButtonAttribute();
        $button .= $this->getDeleteButtonAttribute();

        return $button;
    }
}
