<?php

namespace App\Http\Controllers\Frontend;

use App\Models\News;
use App\Http\Controllers\Controller;
use App\Services\Frontend\Counter\CounterService;

class NewsController extends Controller
{
    /**
     * @var CounterService
     */
    protected $counter;

    /**
     * NewsController constructor.
     */
    public function __construct()
    {
        $this->counter = new CounterService();
    }

    /**
     * Просмотр новости.
     *
     * @param News $news
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function __invoke(News $news)
    {
        $news->load(['image', 'category']);

        return view('frontend.news.show', [
            'news' => $news,
            'statistic' => $this->counter->updateStatistic($news->id),
        ]);
    }
}
