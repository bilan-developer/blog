<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'path'
    ];


    protected $appends = ['full_path'];

    /**
     * Полный путь к картинке.
     *
     * @return string
     */
    public function getFullPathAttribute()
    {
        return sprintf("/%s/%s", $this->path, $this->name);
    }
}
