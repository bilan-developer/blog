<?php


namespace App\Services\Backend\Image;


use Illuminate\Support\Facades\File;
use App\Models\Image as ImageModel;
use Intervention\Image\ImageManagerStatic as Image;

class ImageService
{
    /**
     * Загрузка фотографий на сервер
     *
     * @param $photo
     * @param $name_module
     * @param int $width
     * @param int $height
     * @return string mixed
     */
    public static function savePhoto($photo, $name_module, $width = 500, $height = 500): string
    {
        $file_name = $photo->getClientOriginalName();
        $path = $name_module . '/' . time();

        if (!File::isDirectory(storage_path('app/public/' . $path))) {
            File::makeDirectory(storage_path('app/public/' . $path), 0777, true, true);
        }

        Image::make($photo->getPathName())->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        })->save(storage_path('app/public/' . $path) . '/' . $file_name);

        $model = ImageModel::create(['name' => $file_name, 'path' => $path]);

        return $model->id;
    }

    /**
     * Удалени картинки вместе с папкой меткой.
     *
     * @param ImageModel $image
     * @throws \Exception
     */
    public static function deletePhotoAndDirectory(ImageModel $image)
    {
        if (File::isDirectory(storage_path('app/public/' . $image->path))) {
            if (File::deleteDirectory(storage_path('app/public/' . $image->path))) {
                $image->delete();
            }
        }
    }
}