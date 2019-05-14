<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
            <li><a href="/">Блог</a></li>
            <li>
                <hr>
            </li>

            <li class="{{ active_class(if_uri_pattern(['admin/category*']))}}">
                <a href="{!! route('admin.category.index') !!}"><span>Категории</span></a>
            </li>
            <li class="{{ active_class(if_uri_pattern(['admin/news*']))}}">
                <a href="{!! route('admin.news.index') !!}"><span>Новости</span></a>
            </li>

            <li>
                <hr>
            </li>
            <li><a href="{!! route('logout') !!}">Выход</a></li>
        </ul>
    </section>
</aside>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

@push('after-styles-end')
    <style>
        .main-sidebar .user-panel {
            display: block;
            margin-top: -40px;
        }

        .main-sidebar .user-panel > .info {
            position: relative;
            padding-top: 15px;
            left: 0;
        }

        .main-sidebar .user-panel:hover .info {
            text-decoration: underline;
        }
    </style>
@endpush

