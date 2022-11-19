# Generated by Django 4.1.3 on 2022-11-18 15:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='booklist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=4)),
                ('book_name', models.CharField(max_length=30)),
                ('genre', models.CharField(max_length=30)),
                ('key_word1', models.CharField(max_length=30)),
                ('key_word2', models.CharField(max_length=30, null=True)),
                ('key_word3', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='bookdetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=30)),
                ('bookcontents', models.TextField()),
                ('book_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bookdetail', to='main.booklist')),
            ],
        ),
    ]
