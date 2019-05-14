<?php

namespace App\Http\Core;

class Constants
{
    const OK_STATUS = 'ok';
    const INFO_STATUS = 'info';
    const WARNING_STATUS = 'warning';
    const ERROR_STATUS = 'error';

    const GENERAL_ERROR_MESSAGE = 'Во время выполнения операции возникла ошибка';

    /** HTTP статус коды */
    const OK_STATUS_CODE = 200;
    const CREATED_STATUS_CODE = 201;
    const UPDATED_STATUS_CODE = 204 ;
    const NOT_AUTHORIZED_STATUS_CODE = 401;
    const NOT_FOUND_STATUS_CODE = 404;
    const NOT_ACCESSIBILITY_STATUS_CODE = 403;
    const UNPROCESSABLE_ENTITY_STATUS_CODE = 422;

    /** Максимально допустимый размер изображения*/
    const MAX_FILE_SIZE_IMAGE = 1024; // 1




}