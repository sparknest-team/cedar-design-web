import type { Ref } from 'vue'

export function useApi(fetch?: { get: any; post: any }, urlType?: Ref<string | undefined>) {
  const offset = 0
  const pageNo = 1

  const getAresPeople = (name?: string) => {
    return new Promise((resolve) => {
      const url = '/pe/powerpro/v1/user/list'
      // '/pe/powerpro/bff/platform/v1/ares/administrators'
      // '/pe/powerpro/bff/platform/v1/people/list'
      // 网关支持配置
      fetch
        ?.post(url, {
          params: {
            name,
            offset,
            count: 100,
          },
        })
        .then((res: any) => {
          resolve(res)
        })
        .catch(() => {
          resolve({})
        })
    })
  }

  const getOssPeople = (name?: string) => {
    return new Promise((resolve) => {
      const url = '/pe/powerpro/node/api/v1/user/list'
      // 网关支持配置
      fetch
        ?.get(url, {
          params: {
            name,
            pageNo,
            pageSize: 100,
          },
          beforeParse: (dto: any) => {
            const data =
              dto?.data?.map((item: any) => {
                let displayName = ''
                const ms = item.userName.match(/（(.+)）/g)
                if (ms) {
                  let s = ms.toString()
                  s = s.substr(1, s.length - 2)
                  item.userName = s + '（' + item.outerUserId + '）'
                  displayName = s
                } else {
                  displayName = item.userName
                }
                return {
                  user_id: item.outerUserId,
                  display_name: displayName,
                  name: item.userName,
                }
              }) || []
            dto.data = {
              result_list: data,
              total_results: data.length || 0,
            }
            return dto
          },
        })
        .then((res: any) => {
          resolve(res)
        })
        .catch((e: any) => {
          resolve({})
        })
    })
  }

  const getPeople = async (name?: string) => {
    if (urlType?.value === 'oss') {
      return await getOssPeople(name)
    }
    return await getAresPeople(name)
  }
  const getPeopleFromNaponen = (userId?: string) => {
    return new Promise((resolve) => {
      const url = '/pe/powerpro/bff/platform/v1/people/list'
      // 网关支持配置
      fetch
        ?.get(url, {
          params: {
            worker_user_id: userId,
            offset,
            count: 100,
          },
        })
        .then((res: any) => {
          resolve(res)
        })
        .catch(() => {
          resolve({})
        })
    })
  }
  return {
    getPeople,
    getPeopleFromNaponen,
  }
}
