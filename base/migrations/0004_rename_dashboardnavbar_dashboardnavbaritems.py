# Generated by Django 3.2.7 on 2021-09-18 09:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_dashboardnavbar_image'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DashboardNavbar',
            new_name='DashboardNavbarItems',
        ),
    ]