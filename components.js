// تحميل الشريط العلوي وشريط التنقل من ملفات مستقلة
document.addEventListener('DOMContentLoaded', async () => {
  const slots = document.querySelectorAll('[data-include]');
  await Promise.all([...slots].map(async slot => {
    try { const response = await fetch(slot.dataset.include); if (!response.ok) throw new Error('تعذر تحميل الجزء'); slot.innerHTML = await response.text(); }
    catch (error) { slot.textContent = 'شغّلي المشروع باستخدام Live Server لعرض أشرطة التنقل.'; }
  }));
});