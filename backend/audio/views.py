from django.shortcuts import render
from .forms import AudioFileForm

# Create your views here.

def upload_audio(request):
    if request.method == 'POST':
        form = AudioFileForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = AudioFileForm()
    return render(request, '', {'form': form})      # need to add template that will be rendered