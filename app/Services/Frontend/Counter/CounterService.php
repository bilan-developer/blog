<?php
/**
 * Created by PhpStorm.
 * User: Bilan
 * Date: 14.05.2019
 * Time: 0:08
 */

namespace App\Services\Frontend\Counter;


use Illuminate\Support\Facades\Cache;

class CounterService
{
    protected $statistic;

    /**
     * Обновление статистики.
     *
     * @param $id
     *
     * @return array
     */
    public function updateStatistic($id)
    {
        $this->statistic = $this->getStatistic($id);
        $this->addViews();
        $this->addVisits();
        $this->addVisits();
        $this->setStatistic($id);

        return $this->count();
    }


    /**
     * Подсчёт статистики.
     *
     * @return array
     */
    private function count()
    {
        return [
            'countViews' => count($this->statistic['views']),
            'countVisits' => count($this->statistic['visits']),
        ];
    }

    /**
     * Добавление просмотра.
     */
    private function addViews()
    {
        $this->statistic['views'][] = $_SERVER['REMOTE_ADDR'];
    }

    /**
     * Добавление уникального посетителя.
     */
    private function addVisits()
    {
        if(!in_array($_SERVER['REMOTE_ADDR'], $this->statistic['visits'])){
            $this->statistic['visits'][] = $_SERVER['REMOTE_ADDR'];
        }
    }

    /**
     * Статистика по новости.
     *
     * @param $id
     * @return mixed
     */
    private function getStatistic($id)
    {
        return Cache::rememberForever('news_' . $id, function() {
            return [
                'views' => [],
                'visits' => []
            ];
        });
    }

    /**
     * Записать новые значения статистики.
     *
     * @param $id
     */
    private function setStatistic($id)
    {
        Cache::forever('news_' . $id, $this->statistic);
    }
}