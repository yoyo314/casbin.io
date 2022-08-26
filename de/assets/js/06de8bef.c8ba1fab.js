"use strict";(self.webpackChunkcasbin_website_v2=self.webpackChunkcasbin_website_v2||[]).push([[4863],{3905:function(e,n,i){i.d(n,{Zo:function(){return c},kt:function(){return m}});var r=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=r.createContext({}),s=function(e){var n=r.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(i),m=t,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return i?r.createElement(k,l(l({ref:n},c),{},{components:i})):r.createElement(k,l({ref:n},c))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,l=new Array(a);l[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},2027:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=i(3117),t=i(102),a=(i(7294),i(3905)),l=["components"],o={id:"api-overview",title:"API-\xdcbersicht",description:"Casbin API usage",keywords:["API overview","API","API usage"]},d=void 0,s={unversionedId:"api-overview",id:"api-overview",title:"API-\xdcbersicht",description:"Casbin API usage",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/APIOverview.mdx",sourceDirName:".",slug:"/api-overview",permalink:"/de/docs/api-overview",draft:!1,editUrl:"https://crowdin.com/project/casbin-website/de",tags:[],version:"current",frontMatter:{id:"api-overview",title:"API-\xdcbersicht",description:"Casbin API usage",keywords:["API overview","API","API usage"]},sidebar:"docs",previous:{title:"Cloud Native Middlewares",permalink:"/de/docs/cloud-native"},next:{title:"Management-API",permalink:"/de/docs/management-api"}},c={},u=[{value:"API erzwingen",id:"api-erzwingen",level:2},{value:"EnforceEx API",id:"enforceex-api",level:2},{value:"Management-API",id:"management-api",level:2},{value:"Get API",id:"get-api",level:3},{value:"API hinzuf\xfcgen, l\xf6schen, Update API",id:"api-hinzuf\xfcgen-l\xf6schen-update-api",level:3},{value:"RBAC API",id:"rbac-api",level:2}],p={toc:u};function m(e){var n=e.components,i=(0,t.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Diese \xdcbersicht zeigt Ihnen nur, wie Sie Casbin APIs verwenden und erkl\xe4rt nicht, wie Casbin installiert wird und wie es funktioniert. Diese Tutorials finden Sie hier: ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started"},"Installation von Casbin")," und ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-it-works"},"wie Casbin funktioniert"),". Wenn Sie also anfangen, dieses Tutorial zu lesen, gehen wir davon aus, dass Sie Casbin vollst\xe4ndig installiert und in Ihren Code importiert haben."),(0,a.kt)("h2",{id:"api-erzwingen"},"API erzwingen"),(0,a.kt)("p",null,"Beginnen wir mit den erzwungenen APIs von Casbin. Wir laden ein RBAC-Modell von ",(0,a.kt)("inlineCode",{parentName:"p"},"model.conf"),"und laden Richtlinien von ",(0,a.kt)("inlineCode",{parentName:"p"},"policy.csv"),". You can learn the Model syntax ",(0,a.kt)("a",{parentName:"p",href:"/docs/syntax-for-models"},"here"),", and we won't talk about it in this tutorial. Wir gehen davon aus, dass Sie die folgenden Konfigurationsdateien verstehen k\xf6nnen:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"model.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"policy.csv")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"p, admin, data1, read\np, admin, data1, write\np, admin, data2, read\np, admin, data2, write\np, alice, data1, read\np, bob, data2, write\ng, amber, admin\ng, abc, admin\n")),(0,a.kt)("p",null,"Nachdem Sie die Konfigurationsdateien gelesen haben, lesen Sie bitte den folgenden Code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Lade Informationen aus Dateien\nenforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy. sv")\nif err != nil {\n    log. atalf("error, detail: %s", err)\n}\nok, err := enforcer.Enforce("alice", "data1", "read")\n')),(0,a.kt)("p",null,"Dieser Code l\xe4dt das Zugriffskontrollmodell und die Richtlinien aus lokalen Dateien. Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"casbin.NewEnforcer()")," gibt einen Vollstrecker zur\xfcck. Es erkennt seine 2 Parameter als Dateipfade und l\xe4dt die Dateien von dort. Fehler im Prozess wurden in ",(0,a.kt)("inlineCode",{parentName:"p"},"err")," gespeichert. Dieser Code benutzt den Standard-Adapter, um Modell und Richtlinien zu laden. Und nat\xfcrlich k\xf6nnen Sie das gleiche Ergebnis mit Hilfe eines Drittanbieter-Adapters erzielen."),(0,a.kt)("p",null,"Code ",(0,a.kt)("inlineCode",{parentName:"p"},'ok, err := enforcer.Enforce("alice", "data1", "read")'),"  soll Zugriffsberechtigungen best\xe4tigen. Wenn der Alice auf die Daten 1 mit gelesener Operation zugreifen kann, der zur\xfcckgegebene Wert ",(0,a.kt)("inlineCode",{parentName:"p"},"ok")," wird ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"sein, andernfalls ist er ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". In diesem Beispiel ist der Wert von ",(0,a.kt)("inlineCode",{parentName:"p"},"ok")," ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"enforceex-api"},"EnforceEx API"),(0,a.kt)("p",null,"Manchmal kann man sich fragen, welche Politik die Anfrage erlaubt hat, deshalb haben wir die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"EnforceEx()")," vorbereitet. Sie k\xf6nnen es so verwenden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'ok, reason, err := enforcer.EnforceEx("amber", "data1", "read")\nfmt.Println(ok, Grund) // true [admin data1 read]\n')),(0,a.kt)("p",null,"Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"EnforceEx()")," gibt den exakten Richtlinienstring im R\xfcckgabewert ",(0,a.kt)("inlineCode",{parentName:"p"},"Grund")," zur\xfcck. In diesem Beispiel ist ",(0,a.kt)("inlineCode",{parentName:"p"},"Bernstein")," eine Rolle von ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),", so Policy ",(0,a.kt)("inlineCode",{parentName:"p"},"p, admin, data1, lesen Sie")," hat diese Anfrage ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". Das Output dieses Codes ist in dem Kommentar."),(0,a.kt)("p",null,"Casbin bereitete eine Menge solcher APIs vor. Diese APIs haben einige zus\xe4tzliche Funktionen auf der Basis hinzugef\xfcgt. Sie sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ok, err := enforcer.EnforceWithMatcher(matcher, request)")),(0,a.kt)("p",{parentName:"li"},"Mit einem Matcher.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ok, reason, err := enforcer.EnforceExWithMatcher(matcher, request)")),(0,a.kt)("p",{parentName:"li"},"Eine Kombination von ",(0,a.kt)("inlineCode",{parentName:"p"},"EnforceWithMatcher()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"EnforceEx()"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"boolArray, err := enforcer.BatchEnforce(requests)")),(0,a.kt)("p",{parentName:"li"},"F\xfchre einen Listenauftrag aus, gibt ein Array zur\xfcck."))),(0,a.kt)("p",null,"Dies ist eine einfache Verwendung von Casbin. Sie k\xf6nnen Casbin benutzen, um einen Autorisierungsserver \xfcber diese API zu starten. Wir zeigen Ihnen einige andere APIs in den n\xe4chsten Abs\xe4tzen."),(0,a.kt)("h2",{id:"management-api"},"Management-API"),(0,a.kt)("h3",{id:"get-api"},"Get API"),(0,a.kt)("p",null,"Diese APIs werden verwendet, um exakte Objekte in Richtlinien zu erhalten. Dieses Mal haben wir einen Vollstrecker wie das letzte Beispiel geladen und bekommen etwas davon."),(0,a.kt)("p",null,"Bitte lesen Sie den folgenden Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\nallSubjects := enforcer.GetAllSubjects()\nfmt.Println(allSubjects)\n')),(0,a.kt)("p",null,"Wie das letzte Beispiel haben auch die ersten 4 Zeilen einige notwendige Informationen aus lokalen Dateien geladen. Dar\xfcber werden wir hier nicht mehr reden."),(0,a.kt)("p",null,"Code ",(0,a.kt)("inlineCode",{parentName:"p"},"allSubjects := enforcer.GetAllSubjects()")," hat alle Subjekte in der Richtlinien-Datei erhalten und sie als Array zur\xfcckgegeben. Dann haben wir dieses Array gedruckt."),(0,a.kt)("p",null,"Normalerweise sollte die Ausgabe des Codes sein:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[admin alice bob]\n")),(0,a.kt)("p",null,"Sie k\xf6nnen auch die Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAllSubjects()")," zu ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAllNamedSubjects()")," \xe4ndern, o holt die Liste der Themen, die in den aktuell benannten Richtlinien erscheinen."),(0,a.kt)("p",null,"Ebenso haben wir ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAll-")," Funktionen f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"Objekte, Aktionen, Rollen")," vorbereitet. Das einzige, was Sie tun m\xfcssen, ist, das Wort ",(0,a.kt)("inlineCode",{parentName:"p"},"Betreff")," im Funktionsnamen in das zu \xe4ndern, was Sie wollen, wenn Sie auf diese Funktionen zugreifen m\xf6chten."),(0,a.kt)("p",null,"Au\xdferdem haben wir mehr Entscheidungstr\xe4ger f\xfcr die Politik. Die Rufmethode und der R\xfcckgabewert \xe4hneln denen oben."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"policy = e.GetPolicy()")," erh\xe4lt alle Berechtigungsregeln in der Richtlinie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'filteredPolicy := e.GetFilteredPolicy(0, "alice")')," holt alle Autorisierungsregeln in der Richtlinie, Feldfilter k\xf6nnen angegeben werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'namedPolicy := e.GetNamedPolicy("p")')," erh\xe4lt alle Autorisierungsregeln in der angegebenen Richtlinie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'filteredNamedPolicy = e.GetFilteredNamedPolicy("p", 0, "bob")')," holt alle Autorisierungsregeln in den genannten Richtlinien, Feldfilter k\xf6nnen angegeben werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"groupingPolicy := e.GetGroupingPolicy()")," holt alle Rollenvererbungsregeln in der Richtlinie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'filteredGroupingPolicy := e.GetFilteredGroupingPolicy(0, "alice")')," erh\xe4lt alle Rollenvererbungsregeln in der Richtlinie, Feldfilter k\xf6nnen angegeben werden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetNamedGroupingPolicy("g")')," holt alle Rollenvererbungsregeln in der Richtlinie."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'namedGroupingPolicy := e.GetFilteredNamedGroupingPolicy("g", 0, "alice")')," erh\xe4lt alle Rollenvererbungsregeln in der Richtlinie.")),(0,a.kt)("h3",{id:"api-hinzuf\xfcgen-l\xf6schen-update-api"},"API hinzuf\xfcgen, l\xf6schen, Update API"),(0,a.kt)("p",null,"Casbin bereitete eine Menge APIs f\xfcr Richtlinien vor. Mit diesen APIs k\xf6nnen Sie Richtlinien zur Laufzeit dynamisch hinzuf\xfcgen, l\xf6schen oder bearbeiten."),(0,a.kt)("p",null,"Dieser Code zeigt Ihnen, wie Sie Ihre Richtlinien hinzuf\xfcgen, entfernen und aktualisieren und wie Sie best\xe4tigen k\xf6nnen, dass eine Richtlinie existiert:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Lade Informationen aus Dateien\nenforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n   fmt. rintf("Error, details: %s\\n", err)\n}\n\n// Richtlinien hinzuf\xfcgen, dann HasPolicy() verwenden, um zu best\xe4tigen, dass\nVollstreckung durchgesetzt wird. ddPolicy("added_user", "data1", "read")\nhasPolicy := enforcer.HasPolicy("added_user", "data1", "read")\nfmt. rintln(hasPolicy) // true haben wir hinzugef\xfcgt, dass die Richtlinie erfolgreich\n\n// eine Richtlinie entfernen und dann HasPolicy() verwenden, um zu best\xe4tigen, dass\ndurchgesetzt wird. emovePolicy("alice", "data1", "read")\nhasPolicy = enforcer.HasPolicy("alice", "data1", "read")\nfmt. rintln(hasPolicy) // falsch, wir haben diese Richtlinie erfolgreich gel\xf6scht\n\n// Richtlinien aktualisieren und dann HasPolicy() verwenden, um zu best\xe4tigen, dass\nDurchsetzer ist. pdatePolicy([]string{"added_user", "data1", "read"}, []string{"added_user", "data1", "write"})\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "read")\nfmt. rintln(hasPolicy) // falsch, die Ursprungsrichtlinie ist abgelaufen\nhasPolicy = enforcer.HasPolicy("added_user", "data1", "write")\nfmt.Println(hasPolicy) // true the new policy is in use\n')),(0,a.kt)("p",null,"Mit diesen vier Arten von APIs k\xf6nnen Sie Ihre Richtlinien bearbeiten. Wie diese haben wir die gleichen Arten von APIs f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"FilteredPolicy, NamedPolicy, FilteredNamedPolicy, GroupingPolicy, NamedGroupingPolicy, FilteredGroupingPolicy, FilteredNamedGroupingPolicy")," vorbereitet. Um sie zu verwenden, m\xfcssen Sie nur das Wort ",(0,a.kt)("inlineCode",{parentName:"p"},"Richtlinie")," im Funktionsnamen zu den obigen W\xf6rtern ersetzen."),(0,a.kt)("p",null,"Wenn Sie au\xdferdem Parameter in Arrays \xe4ndern, k\xf6nnen Sie Ihre Richtlinien Batch bearbeiten."),(0,a.kt)("p",null,"Zum Beispiel f\xfcr Funktionen wie diese:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicy([]string{"eve", "data3", "read"}, []string{"eve", "data3", "write"})\n')),(0,a.kt)("p",null,"wenn wir ",(0,a.kt)("inlineCode",{parentName:"p"},"Richtlinien")," zu ",(0,a.kt)("inlineCode",{parentName:"p"},"Richtlinien"),"\xe4ndern und den Parameter bearbeiten:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.UpdatePolicies([][]string{{"eve", "data3", "read"}, {"jack", "data3", "read"}}, [][]string{{"eve", "data3", "write"}, {"jack", "data3", "write"}})\n')),(0,a.kt)("p",null,"dann k\xf6nnen wir diese Richtlinien Batch bearbeiten."),(0,a.kt)("p",null,"Gleiche Operationen sind auch n\xfctzlich f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupingPolicy, NamedGroupingPolicy"),"."),(0,a.kt)("h2",{id:"rbac-api"},"RBAC API"),(0,a.kt)("p",null,"Casbin stellt Ihnen APIs zur Verf\xfcgung, um das RBAC-Modell und -Richtlinien zu \xe4ndern. Wenn Sie mit RBAC vertraut sind, k\xf6nnen Sie diese APIs einfach verwenden."),(0,a.kt)("p",null,"Hier zeigen wir Ihnen nur wie Sie die RBAC APIs von Casbin verwenden und sprechen nicht \xfcber RBAC selbst. Weitere Details erhalten Sie ",(0,a.kt)("a",{parentName:"p",href:"/docs/rbac"},"hier"),"."),(0,a.kt)("p",null,"Wir verwenden diesen Code, um Modell und Richtlinien wie zuvor zu laden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'enforcer,err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")\nif err != nil {\n    fmt.Printf("Error, details: %s\\n", err)\n}\n')),(0,a.kt)("p",null,"dann verwenden Sie eine Instanz des Vollstreckenden ",(0,a.kt)("inlineCode",{parentName:"p"},"Enforcer")," um auf diese APIs zuzugreifen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'roles, err := enforcer.GetRolesForUser("amber")\nfmt.Println(roles) // [admin]\nBenutzer, err := enforcer.GetUsersForRole("admin")\nfmt.Println(users) // [amber abc]\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GetRolesForUser()")," hat ein Array zur\xfcckgegeben, das alle Rollen enthielt, die Amber enthalten. In diesem Beispiel hat Bernstein nur einen Rollen-Admin, also sind ",(0,a.kt)("inlineCode",{parentName:"p"},"Rollen")," ",(0,a.kt)("inlineCode",{parentName:"p"},"[admin]"),". Und \xe4hnlich k\xf6nnen Sie ",(0,a.kt)("inlineCode",{parentName:"p"},"GetUsersForRole()")," verwenden, um Benutzer zur Rolle zu bringen. Der R\xfcckgabewert dieser Funktion ist auch ein Array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'enforcer.HasRoleForUser("amber", "admin") // true\n')),(0,a.kt)("p",null,"Sie k\xf6nnen ",(0,a.kt)("inlineCode",{parentName:"p"},"HasRoleForUser()")," verwenden, um zu best\xe4tigen, ob der Benutzer zur Rolle geh\xf6rt. In diesem Beispiel ist Bernstein Mitglied des Admins, also ist der R\xfcckgabewert der Funktion ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("bob", "data2", "write")) // true\nenforcer.DeletePermission("data2", "write")\nfmt.Println(enforcer.Enforce("bob", "data2", "write")) // false\n')),(0,a.kt)("p",null,"Sie k\xf6nnen ",(0,a.kt)("inlineCode",{parentName:"p"},"DeletePermission()")," verwenden, um eine Berechtigung zu l\xf6schen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'fmt.Println(enforcer.Enforce("alice", "data1", "read")) // true\nenforcer.DeletePermissionForUser("alice", "data1", "read")\nfmt.Println(enforcer.Enforce("alice", "data1", "read")) // false false\n')),(0,a.kt)("p",null,"Und verwenden Sie ",(0,a.kt)("inlineCode",{parentName:"p"},"DeletePermissionForUser()")," um eine Berechtigung f\xfcr einen Benutzer zu l\xf6schen."),(0,a.kt)("p",null,"Casbin hat viele APIs wie diese. Ihre Rufmethoden und R\xfcckgabewerte haben den gleichen Stil wie die oben genannten APIs. Diese APIs finden Sie in ",(0,a.kt)("a",{parentName:"p",href:"/docs/rbac-api"},"n\xe4chsten Dokumenten"),"."))}m.isMDXComponent=!0}}]);