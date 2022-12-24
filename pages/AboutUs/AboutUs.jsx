import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="flex flex-col my-8 mx-8 sm:mx-10 lg:mx-24 gap-4"
    >
      <div className="w-full text-4xl leading-none border-b-2 border-blue-400 pb-4 mb-2 md:mb-4">
        <h1>About Us</h1>
      </div>
      <div className="max-w-7xl flex flex-col md:flex-row gap-2 sm:gap-4 ">
        <div className="space-y-5">
          <p>
            Layanan ini dipimpin oleh Yudhistira Taniwidjaya, S.E., Ak., A-CPA,
            BKP. Seorang Profesional yang sudah memiliki sertifikasi profesi
            Praktisi Pajak bergelar Bersertifikat Konsultan Pajak dari IKPI yang
            disahkan Kementrian Keuangan.
          </p>
          <p>
            We offer a variety of services for all business needs including, Tax
            &amp; Accountancy, Payroll Management, Company Set-up, Trademark
            registration, VAT Registration, BPJS Registration, as well as
            assisting Visas for foreign employees.
          </p>
          <p>
            Contact us for a free 1-hour consultation to see how we can help you
            too.
          </p>
        </div>

        <div className="min-w-max bg-white rounded-lg hover:shadow-lg hover:scale-105 duration-500">
          <div className="flex justify-center">
            <img
              src="https://www.roberthalf.com/sites/default/files/2022-01/How-to-Hire-a-Senior-Accountant-Count-the-Ways-Blog-RH-01-03-2022_0.jpeg"
              alt=""
              width=""
              className="border rounded-t-lg object-fill w-full max-h-[250px]"
            />
          </div>
          <div className="p-6">
            <p className="group-hover:text-gray-800 text-md font-thin">
              ir.Ana Christyawati Spd. Mhd
            </p>
            <h2 className="font-bold group-hover:text-gray-800 text-md">
              Ceo perusahaan
            </h2>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-blue-500 text-lg sm:text-xl md:text-3xl lg:text-5xl mb-4">
          Layanan Perpajakan dan Penyusunan Laporan Keuangan
        </h1>
        <ol className="list-decimal ml-8 sm:text-1xl md:text-3xl lg:text-2xl text-blue-500 font-thin">
          <li>Konsultasi Pajak Gratis.</li>
          <li>Konsultasi Perencanaan Pajak.</li>
          <li>
            Layanan Administrasi Perpajakan Bulanan dan Penyusunan SPT Tahunan.
          </li>
          <li>Layanan Penyusunan Laporan Keuangan (Accounting Services).</li>
          <li>Layanan Perpajakan Lainnya.</li>
        </ol>
      </div>

      <div className="flex flex-col gap-2 md:gap-4 items-center font-semibold text-blue-500 text-xl sm:text-lg md:text-xl lg:text-3xl mb-4">
        <h1>3 Langkah Mudah Pengurusan Pajak dan Pembukuan</h1>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-col items-center">
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-2xl">
              Konsultasi Gratis
            </h2>
            <p className="text-sm text-center sm:text-base md:text-lg lg:text-xl text-gray-900 font-thin">
              Konsultasi gratis dengan Konsultan Pajak Terdaftar untuk
              mengidentifikasi kebutuhan perpajakan anda
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-2xl">
              Konsultasi Gratis
            </h2>
            <p className="text-sm text-center sm:text-base md:text-lg lg:text-xl text-gray-900 font-thin">
              Konsultasi gratis dengan Konsultan Pajak Terdaftar untuk
              mengidentifikasi kebutuhan perpajakan anda
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-base sm:text-xl md:text-3xl lg:text-2xl">
              Konsultasi Gratis
            </h2>
            <p className="text-sm text-center sm:text-base md:text-lg lg:text-xl text-gray-900 font-thin">
              Konsultasi gratis dengan Konsultan Pajak Terdaftar untuk
              mengidentifikasi kebutuhan perpajakan anda
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-base sm:text-lg md:text-5xl text-center p-2 bg-blue-400 text-slate-50">
          Kesulitan Menangani Pembukuan dan Perpajakan karena hal ini?
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <span className="flex-col flex gap-6 border p-2">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-6xl text-blue-400"
            />
            <h1 className="text-center text-2xl font-thin text-blue-400">
              Tidak familiar dengan Pajak
            </h1>
          </span>

          <span className="flex-col flex gap-6 border p-2">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-6xl text-blue-400"
            />
            <h1 className="text-center text-2xl font-thin text-blue-400">
              Tidak familiar dengan Pajak
            </h1>
          </span>

          <span className="flex-col flex gap-6 border p-2">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-6xl text-blue-400"
            />
            <h1 className="text-center text-2xl font-thin text-blue-400">
              Tidak familiar dengan Pajak
            </h1>
          </span>

          <span className="flex-col flex gap-6 border p-2">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-6xl text-blue-400"
            />
            <h1 className="text-center text-2xl font-thin text-blue-400">
              Tidak familiar dengan Pajak
            </h1>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
