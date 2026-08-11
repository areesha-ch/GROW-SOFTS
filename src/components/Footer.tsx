<div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
  <div>
    <p className="text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
    </p>
    <p className="text-gray-400 text-sm mt-2">
      Grow Softs LLC is operated by ALLISON KALA MONDAY
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
    <span>{companyInfo.address}</span>
    <span>&middot;</span>
    <span>{companyInfo.city}, {companyInfo.state} {companyInfo.zip}</span>
  </div>
</div>
