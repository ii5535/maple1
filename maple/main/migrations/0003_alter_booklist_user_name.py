# Generated by Django 4.1.3 on 2022-11-19 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_booklist_user_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booklist',
            name='user_name',
            field=models.CharField(max_length=4, null=True),
        ),
    ]
