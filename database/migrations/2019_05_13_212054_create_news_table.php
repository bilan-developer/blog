<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 1000);
            $table->string('description', 2000);
            $table->text('text');
            $table->bigInteger('image_id');
            $table->date('date');
            $table->string('author', 1000);
            $table->bigInteger('category_id');
            $table->enum('status', ['publish', 'hidden']);

            $table->timestamps();

            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('news', function(Blueprint $table) {
            $table->dropForeign('news_image_id_foreign');
            $table->dropForeign('news_category_id_foreign');
        });

        Schema::dropIfExists('news');
    }
}
