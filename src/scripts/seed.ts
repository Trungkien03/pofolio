import { DATA } from '@/data/resume';
import dbConnect from '@/lib/db';
import award from '@/lib/models/award';
import certification from '@/lib/models/certification';
import education from '@/lib/models/education';
import project from '@/lib/models/project';
import reference from '@/lib/models/reference';
import skill from '@/lib/models/skill';
import work from '@/lib/models/work';

// Hàm seed cho từng loại
async function seed() {
  await dbConnect();

  // Xóa dữ liệu cũ
  await skill.deleteMany({});
  await work.deleteMany({});
  await education.deleteMany({});
  await project.deleteMany({});
  await award.deleteMany({});
  await certification.deleteMany({});
  await reference.deleteMany({});

  await skill.insertMany(DATA.skills);
  await work.insertMany(DATA.work);
  await education.insertMany(DATA.education);
  await project.insertMany(DATA.projects);
  await award.insertMany(DATA.awards);
  await certification.insertMany(DATA.certifications);
  await reference.insertMany(DATA.references);

  console.log('Seed thành công!');
  process.exit();
}

seed();
